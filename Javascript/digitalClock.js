  function showtime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      document.getElementById('timer').innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(showtime, 1000);
      window.onload = showtime();
  }