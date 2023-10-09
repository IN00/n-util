# 実装

## include

Ruby の range include? を命名の参考にした。

lodash の inRange は終端を含めないため

## toA

lodash に toArray(), castArray があるがスタート、エンドを指定出来ないので不採用
https://lodash.com/docs/4.17.15#toArray

# アイディア

- フラグによって、終端を含めるランジにするか、クラスとして分けるかどうか？は考え中
- ひとまづ、DateRange, NumberRange のように分けて実装したい

