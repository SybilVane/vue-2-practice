<script>
export default {
  name: 'PracticeComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    hasToShowSubtitle: {
      type: Boolean,
      default: false
    },
    movieList: {
      type: Array,
      required: true,
      default: []
    }
  },
  data() {
    return {
      text1value: '',
      text2value: 'BBB',
      itemList: [
        { id: 0, name: 'Butterfly', description: 'Insect' },
        { id: 1, name: 'Apple', description: 'Fruit' },
        { id: 2, name: 'Box', description: 'Object' }
      ],
      sortedColumn: 'title'
    }
  },
  computed: {
    textConcat2() {
      return this.text1value + this.text2value
    },
    movieListData() {
      return this.movieList
        .filter((item) => {
          return (
            this.text1value === '' ||
            item.title.toLowerCase().indexOf(this.text1value.toLowerCase()) !==
              -1
          )
        })
        .sort((a, b) =>
          String(a[this.sortedColumn]).localeCompare(
            String(b[this.sortedColumn])
          )
        )
    }
  },
  methods: {
    textConcat(a, b) {
      return a + b
    },
    launchClickEvent() {
      this.$emit('vane-click')
    },
    sortByYear() {
      this.sortedColumn = 'year'
    },
    sortByTitle() {
      this.sortedColumn = 'title'
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-if="hasToShowSubtitle">Hello!!!</h2>
    <label for="text1">Text 1 </label>
    <input id="text1" v-model="text1value" />
    <br /><br />
    <label for="text2">Text 2 </label>
    <input id="text2" v-model="text2value" />
    <br />
    <br />
    <span>
      {{ textConcat2 }}
    </span>
    <br />
    <br />
    <button @click="launchClickEvent">Show alert</button>
    <br />
    <p>
      <span v-for="item in itemList" :key="item.id">
        [{{ item.id }}] - {{ item.name }} - {{ item.description }}
      </span>
    </p>
    <button @click="sortByYear">Sort by year</button>
    <button @click="sortByTitle">Sort by title</button>
    <div class="movie-table" v-if="movieListData.length > 0">
      <div v-for="(movie, i) in movieListData" :key="i" class="row">
        <div class="cell bold">{{ movie?.title }}</div>
        <div class="cell">{{ movie?.year }}</div>
        <div class="cell">{{ movie?.director }}</div>
        <div class="cell">{{ movie?.cast }}</div>
        <div class="cell">{{ movie?.genre }}</div>
        <div class="cell">{{ movie?.notes }}</div>
      </div>
    </div>
    <div v-else>LOADING...</div>
  </div>
</template>

<style>
.movie-table {
  margin: auto;
  width: 80%;
}

.row {
  margin-bottom: 2px;
  display: grid;
  grid-template-columns: 2fr auto 1fr 1fr 1fr 2fr;
  gap: 20px;
  border: 1px solid black;
}

.cell {
  padding: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.bold {
  font-weight: bold;
}
</style>
