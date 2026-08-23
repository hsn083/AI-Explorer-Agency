// Clean URL Router - Handles .html extension removal
(function() {
    // Function to get clean URL without .html
    function getCleanUrl(url) {
        return url.replace(/\.html$/, '');
    }

    // Function to get actual file path with .html
    function getFilePath(url) {
        if (url === '/' || url === '') {
            return '/index.html';
        }
        if (url.endsWith('.html')) {
            return url;
        }
        // Check if it's a profile page
        if (url.startsWith('/profiles/')) {
            return url + '.html';
        }
        // Check if it's thank-you page
        if (url === '/thank-you') {
            return '/thank-you.html';
        }
        return url + '.html';
    }

    // Handle initial page load - redirect from .html to clean URL
    if (window.location.pathname.endsWith('.html')) {
        const cleanPath = getCleanUrl(window.location.pathname);
        const hash = window.location.hash;
        const search = window.location.search;
        const newUrl = cleanPath + search + hash;
        window.history.replaceState({}, '', newUrl);
    }

    // Intercept all link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        // Skip external links, anchors, and javascript: links
        if (href.startsWith('http://') || href.startsWith('https://') || 
            href.startsWith('mailto:') || href.startsWith('tel:') ||
            href.startsWith('#') || href.startsWith('javascript:')) {
            return;
        }

        // Get the full path
        let fullPath = href;
        if (href.startsWith('/')) {
            fullPath = href;
        } else if (href.startsWith('../')) {
            // Handle relative paths
            const currentPath = window.location.pathname;
            const pathParts = currentPath.split('/').filter(p => p);
            const hrefParts = href.split('/').filter(p => p);
            
            // Count ../
            let upCount = 0;
            while (hrefParts.length > 0 && hrefParts[0] === '..') {
                hrefParts.shift();
                upCount++;
            }
            
            // Go up directories
            const newPathParts = pathParts.slice(0, Math.max(0, pathParts.length - upCount));
            fullPath = '/' + newPathParts.concat(hrefParts).join('/');
        } else {
            // Same directory
            const currentPath = window.location.pathname;
            const pathParts = currentPath.split('/').filter(p => p);
            if (pathParts.length > 0) {
                pathParts.pop();
            }
            fullPath = '/' + pathParts.concat([href]).join('/');
        }

        // Convert to clean URL
        const cleanUrl = getCleanUrl(fullPath);
        const hash = link.hash || '';
        
        // Prevent default and use History API
        e.preventDefault();
        window.history.pushState({}, '', cleanUrl + hash);
        
        // Load the actual file
        const filePath = getFilePath(cleanUrl);
        window.location.href = filePath;
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        const path = window.location.pathname;
        const filePath = getFilePath(path);
        window.location.href = filePath;
    });
})();
