<script>
export default {
  name: 'ConcatInput',
  props: {
    title: {
      type: Number,
      required: true
    },
    hasToShowSubtitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text1value: 'Texto 1',
      text2value: 'Texto 2',
      itemList: [
        { id: 0, name: 'Butterfly', description: 'Insect' },
        { id: 1, name: 'Apple', description: 'Fruit' },
        { id: 2, name: 'Box', description: 'Object' }
      ]
    }
  },
  computed: {
    textConcat2() {
      console.log(this.hasToShowSubtitle)

      return this.text1value + this.text2value
    }
  },
  methods: {
    textConcat(a, b) {
      return a + b
    },
    launchClickEvent() {
      this.$emit('vane-click')
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-if="hasToShowSubtitle">Hello!!!</h2>
    <label for="text1"> text 1 </label>
    <input id="text1" v-model="text1value" />
    <label for="text2"> text 2 </label>
    <input id="text2" v-model="text2value" />
    <button @click="launchClickEvent">Show alert</button>
    <p>
      <span v-for="item in itemList" :key="item.id">
        [{{ item.id }}] - {{ item.name }} - {{ item.description }}
      </span>
    </p>
    <span>
      {{ textConcat2 }}
    </span>
  </div>
</template>
