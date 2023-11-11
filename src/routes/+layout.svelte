<header>
  <h1>My blog</h1>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/albums">Albums</a></li>
    <li><a href="/about">About me</a></li>
  </ul>
</header>

<main>
  <slot />
</main>

<footer>
  Copyright ©
  <a href="https://www.xingbest.fun">Star</a>
</footer>

<style>
  @font-face {
    font-family: 'Gelasio';
    font-style: normal;
    font-weight: 400;
    src: local('Gelasio Regular'), local('Gelasio-Regular'),
      url(https://fonts.gstatic.com/s/gelasio/v1/cIf9MaFfvUQxTTqS9C6hYQ.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  header {
    display: flex;
    vertical-align: middle;
    border-bottom: 2px solid #ddd;
    font-family: 'Gelasio';
  }
  header ul {
    display: flex;
    flex: auto;
    list-style: none;
    text-decoration: none;
    justify-content: center;
    align-items: center;
  }

  header ul li {
    margin: auto 10px;
  }

  footer {
    border-top: 2px solid #ddd;
    text-align: center;
    line-height: 60px;
    font-family: 'Gelasio';
  }

  main {
    padding: 30px 0;
    font-family: 'Gelasio';
  }
</style>
