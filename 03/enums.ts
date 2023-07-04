enum LoadingState {
  beforeLoad = 'beforeLoad',
  loading    = 'loading',
  loaded     = 'loaded',
}

const isLoading = (state: LoadingState): boolean => state === LoadingState.loading

console.log( isLoading(LoadingState.beforeLoad) )