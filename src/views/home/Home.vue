<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
import WelcomeItem from '@/components/WelcomeItem.vue'

import TheWelcome from '@/components/TheWelcome.vue'
</script>
<template>
  <!-- we put looping component here -->
  <div
    class="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4"
  >
    <HomeCard
      title="This is title"
      body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat amet cupiditate ad. Officia est nam ab accusamus obcaecati ex ea eaque doloribus, fugiat voluptatem a laborum voluptate. Dolor, illum animi."
    ></HomeCard>
  </div>
</template>
