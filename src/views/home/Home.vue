<template>
  <!-- we put looping component here -->
  <div
    class="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4"
  >
    <HomeCard
      v-for="(item, index) in dataList"
      :key="index"
      :image="item.imgUrl"
      :title="item.title"
      :body="item.title"
    ></HomeCard>
  </div>
</template>
<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue'
import { iListMenu } from '@/utils/type'
</script>
<script lang="ts">
interface IData {
  dataList: iListMenu[]
}
export default {
  data(): IData {
    return {
      dataList: [
        {
          id: '1',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore facilis architecto sunt reiciendis molestias, ratione voluptatibus numquam nam ea iste sequi rerum, nihil expedita quam corporis delectus magni explicabo?',
          imgUrl:
            'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Menu 1'
        },
        {
          id: '2',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore facilis architecto sunt reiciendis molestias, ratione voluptatibus numquam nam ea iste sequi rerum, nihil expedita quam corporis delectus magni explicabo?',
          imgUrl:
            'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Menu 2'
        },
        {
          id: '3',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore facilis architecto sunt reiciendis molestias, ratione voluptatibus numquam nam ea iste sequi rerum, nihil expedita quam corporis delectus magni explicabo?',
          imgUrl:
            'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Menu 3'
        },
        {
          id: '4',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore facilis architecto sunt reiciendis molestias, ratione voluptatibus numquam nam ea iste sequi rerum, nihil expedita quam corporis delectus magni explicabo?',
          imgUrl:
            'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          title: 'Menu 4'
        }
      ]
    }
  }
}
</script>
