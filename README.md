# compare-cdn-and-module

```bash
# install jquery and webpack
npm install

# optional
npm run webpack
```

## 1. [cdn1.html](https://github.com/iampaul83/compare-cdn-and-module/blob/master/cdn1.html)

這個範例示範了 cdn1.js 依賴 jQuery，然而有可能依賴會被破壞

## 2. [cdn2.html](https://github.com/iampaul83/compare-cdn-and-module/blob/master/cdn2.html)

這個範例示範了為了避免上面例子的問題，一個解決方案

但是這樣還是有可能會出現問題，如程式碼 cdn2.html 第15行
```html
<script>
  // 把下面的註解解開，以弄壞 jQuery
  $ = ''
</script>
<script src="cdn2.js"></script>
```

## 3. [bundle.html](https://github.com/iampaul83/compare-cdn-and-module/blob/master/bundle.html)

這個範例使用 webpack 把依賴（jQuery）和主程式（index.js）打包再一起（bundle.js）

這樣最不用擔心依賴問題！