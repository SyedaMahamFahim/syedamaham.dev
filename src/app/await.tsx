export default async function Await<T>({
    promise,
    children
  }: {
    promise: Promise<T>
    children: (value: T) => any
  }) {
    let data = await promise
  
    return children(data)
  }