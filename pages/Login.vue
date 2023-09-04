<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const title = ref<string>(t('lottery.title'))

// 改变语言
// 就可以全局改变语言了；

locale.value = 'zhTW'
</script>

<template>
  <div class="login">
    {{title}}
    login
    <el-button type="primary">
      buttons
    </el-button>
    <ul>
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
</template>
