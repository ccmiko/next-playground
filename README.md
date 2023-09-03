# next-ployground

nextであれこれ検証したいとき用

## apiのcurlでテスト例

```shell
# get
curl -XGET "http://localhost:3000/api" -H "key: value"

# get with query string
curl -XGET "http://localhost:3000/api?test=test" -H "key: value"
curl -XGET "http://localhost:3000/api" -H "key: value" -G -d test=test -d test2=test2

# post with body
curl -XPOST "http://localhost:3000/api" -H "key: value" -d '{"test": "test"}'

# post with body and query string
curl -XPOST "http://localhost:3000/api?test=test" -H "key: value" -d '{"test": "test", "test2": 1, "test3": false}'
```
