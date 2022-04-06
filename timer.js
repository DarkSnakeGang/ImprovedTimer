
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

        const poisonsnake = this.responseText.match(
          /([a-zA-Z0-9_$]{1,8}\(this\.[a-zA-Z0-9_$]{1,8},"#5282F2","#909090"\);){3}/
        )[0];

        const poison = (window.snake_scheme_epic_cool || {}).custom_poison || '#909090';

        eval(
          this.responseText.match(
            /[a-zA-Z0-9_$]{1,8}\.prototype\.resetState=function\(a\){a=void 0===a\?!0:a;this\.direction="NONE";this\.[a-zA-Z0-9_$]{1,8}="RIGHT";[^]*?this,!1\)}/
          )[0].replace(
            '--:--:---',
            '-'
          ).replace(
            '{',
            `{
              ${poisonsnake.replace(/#909090/g, poison)}
            `
          )
        );

        eval(
          this.responseText.match(
            /[a-zA-Z0-9_$]{1,8}=function\(a\){if\(!a\.[a-zA-Z0-9_$]{1,8}&&![a-zA-Z0-9_$]{1,8}\)[^}]*?"show"\)\]\)}}/
          )[0].match(/[a-zA-Z0-9_$]{1,8}/)[0] + `= snake.speedrun = function() {
            const q = document.getElementsByClassName('A2vT0')[0].style.display;
            document.getElementsByClassName('A2vT0')[0].style.display = q ? '' : 'none';
          }`
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
