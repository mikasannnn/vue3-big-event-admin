<template>
  <PageContainer title="文章分类">
    <template #extra>
      <el-button>添加分类</el-button>
    </template>
    主体部分是表格
  </PageContainer>
</template>

<style lang="scss" scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
