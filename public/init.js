System.import('//code.jquery.com/jquery-1.11.3.min.js').then(function(jquery) {
    console.log('[OK] jQuery loaded');

    System.import("app/main").then(function() {
        console.log('[OK] main loaded');
    });

    System.import("app/lazy").then(function() {
        console.log('[OK] lazy loaded');
    });
});
