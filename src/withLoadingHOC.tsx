import { Loader } from './Loader'

export function withLoading(Component) {
  return function WithLoadingComponent(props) {
    if (props.isLoading) {
      return <Loader />
    }
    return <Component {...props} />
  }
}
