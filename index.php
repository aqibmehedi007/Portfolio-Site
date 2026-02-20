<?php
/**
 * Front controller that serves static files from the /out directory.
 * This replaces .htaccess rewrite rules which can be unreliable on shared hosting.
 */

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Remove trailing slash (except for root)
if ($requestUri !== '/' && substr($requestUri, -1) === '/') {
    $requestUri = rtrim($requestUri, '/');
}

// Build the path to the file inside /out
$basePath = __DIR__ . '/out';

if ($requestUri === '/') {
    $filePath = $basePath . '/index.html';
} else {
    $filePath = $basePath . $requestUri;
}

// Try exact file match first
if (is_file($filePath)) {
    return serveFile($filePath);
}

// Try adding .html extension (clean URLs)
if (is_file($filePath . '.html')) {
    return serveFile($filePath . '.html');
}

// Try as directory with index.html
if (is_dir($filePath) && is_file($filePath . '/index.html')) {
    return serveFile($filePath . '/index.html');
}

// 404
if (is_file($basePath . '/404.html')) {
    http_response_code(404);
    readfile($basePath . '/404.html');
    exit;
}

http_response_code(404);
echo '404 Not Found';
exit;

function serveFile($filePath) {
    // Get MIME type
    $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
    $mimeTypes = [
        'html' => 'text/html; charset=UTF-8',
        'css'  => 'text/css',
        'js'   => 'application/javascript',
        'json' => 'application/json',
        'xml'  => 'application/xml',
        'txt'  => 'text/plain',
        'svg'  => 'image/svg+xml',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'gif'  => 'image/gif',
        'ico'  => 'image/x-icon',
        'webp' => 'image/webp',
        'woff' => 'font/woff',
        'woff2'=> 'font/woff2',
        'ttf'  => 'font/ttf',
        'eot'  => 'application/vnd.ms-fontobject',
        'map'  => 'application/json',
    ];

    $contentType = $mimeTypes[$ext] ?? 'application/octet-stream';
    
    header('Content-Type: ' . $contentType);
    header('Content-Length: ' . filesize($filePath));
    
    // Cache static assets for 1 year
    if (in_array($ext, ['css', 'js', 'woff', 'woff2', 'ttf', 'eot', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg', 'ico'])) {
        header('Cache-Control: public, max-age=31536000, immutable');
    }
    
    readfile($filePath);
    exit;
}
