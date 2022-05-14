
if(window.snake) {
  snake.good_timer = function() {

    snake.speedrun();

    const scripts = document.getElementsByTagName('script');
    for(let script of scripts) {
      if(script.src === '' || script.src.includes('apis.google.com')) continue;
      const req = new XMLHttpRequest();
      req.open('GET', script.src);
      req.onload = function() {
        if(this.responseText.indexOf('trophy') === -1)
          return;

        
        eval(
          this.responseText.match(
            /[a-zA-Z0-9_$]{1,8}\.prototype\.resetState=function\(a\){a=void 0===a\?!0:[^]*?this\.menu,!1,this\.[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\)}/
          )[0].replace(
            '--:--:---',
            '-'
          )
        );



        eval(
          this.responseText.match(
            /[a-zA-Z0-9_$]{1,8}=function\(a\){a=Math\.floor\(a\);if\(0>=a\)[^}]*?3,"0"\)}/
          )[0].replace(
            /{[^}]*?}/,
            `{
              a = Math.floor(a);
              if(0 >= a)
                return "00:00.000";
              var b = Math.floor(a / 6E4);
              return b.toString().padStart(2, "0") + ":" + (Math.floor(a / 1E3) % 60).toString().padStart(2, "0") + "." + (a % 1E3).toString().padStart(3, "0")
            }`
          )
        );


      };
      req.send();
    }
  };
}
