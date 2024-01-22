<script setup lang="ts">
  import ProductCard from './ProductCard.vue'

  const products = [{
    id: 1,
    name: '나이키 덩크 로우 레트로',
    description: '남성 신발',
    price: 139000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d01ef37b-c14a-4edd-8787-534f5732294c/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-bDdzzUjf.png'
  }, {
    id: 2,
    name: '나이키 덩크 로우',
    description: '남성 신발',
    price: 159000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/65a6dfdc-7d16-44f3-8c1f-e6281c283eae/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-YkLUwEpD.png'
  }, {
    id: 3,
    name: '나이키 덩크 로우 프리미엄',
    description: '남성 신발',
    price: 159000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf66bd79-b7de-4263-8e93-87ee9ed6489b/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-QPzSIPpT.png'
  }, {
    id: 4,
    name: '나이키 인빈서블 3',
    description: '남성 로드 러닝화',
    price: 209000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3e4cd0f-2ee8-4ced-8780-d989124cd3f2/%EC%9D%B8%EB%B9%88%EC%84%9C%EB%B8%94-3-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-mUkQDlaH.png'
  }, {
    id: 5,
    name: '나이키 SB 포스 58',
    description: '스케이트보드화',
    price: 71200,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6f6a7b74-dba5-46fa-ad00-c6f88648c5db/sb-%ED%8F%AC%EC%8A%A4-58-%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%8A%B8%EB%B3%B4%EB%93%9C%ED%99%94-QgY9rtDN.png'
  }, {
    id: 6,
    name: '나이키 루나 포스 1',
    description: '남성 덕부츠',
    price: 209000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89a91ebd-3e3d-4550-b10d-561f6ebba30a/%EB%A3%A8%EB%82%98-%ED%8F%AC%EC%8A%A4-1-%EB%82%A8%EC%84%B1-%EB%8D%95%EB%B6%80%EC%B8%A0-WX7xlUO5.png'
  }, {
    id: 7,
    name: '나이키 알파플라이 3',
    description: '남성 로드 레이싱화',
    price: 329000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7776f88c-1bf6-49ac-a53b-b532f4c51a87/%EC%95%8C%ED%8C%8C%ED%94%8C%EB%9D%BC%EC%9D%B4-3-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-LY1u9iaC.png'
  }, {
    id: 8,
    name: '에어 조던 4 레트로 SE',
    description: '남성 신발',
    price: 259000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6e2a0a2-ad2f-47eb-8ad8-c9373e63c779/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-4-%EB%A0%88%ED%8A%B8%EB%A1%9C-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-jxCFRPSM.png'
  }, {
    id: 9,
    name: '나이키 버로우',
    description: '남성 슬리퍼',
    price: 69000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b4d14679-467f-4021-9ca8-f31e7205535d/%EB%B2%84%EB%A1%9C%EC%9A%B0-%EB%82%A8%EC%84%B1-%EC%8A%AC%EB%A6%AC%ED%8D%BC-ZbD5ucI7.png'
  }]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProductCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>