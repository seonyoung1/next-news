## next.js 로 news 페이지를 만들어보자!!

* 참고사항
    
    * 동적라우팅
    ````
    <Link href="/category/[title]" as={`/category/${address}`}><a>{title}</a></Link>
    ````
    
    * SCSS 사용해보기
    ````
    yarn add @zeit/next-sass node-sass
  
    // next.config.js setting
    const withSass = require('@zeit/next-sass');
    module.exports = withSass();
    ````
    
    