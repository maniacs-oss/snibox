export default {
  methods: {
    factory() {
      return {
        snippet: {
          id: null,
          title: '',
          content: '',
          language: 'automatically',
          tabs: 2,
          label: {
            id: -1,
            name: '',
            snippets_count: 0
          }
        }
      }
    }
  }
}
