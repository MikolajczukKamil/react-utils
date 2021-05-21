import { For } from '../For'

export default function ForDemo() {
  return (
    <For of={['💻', '📌', '🎧', '😊']}>
      {(img, i) => (
        <p key={i}>
          {img} - {i + 10}
        </p>
      )}
    </For>
  )
}
