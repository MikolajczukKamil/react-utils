import { Switch, Case, Default } from '../Switch'

export default function SwitchDemo() {
  const magicNumber = Math.round(Math.random() * 4)

  return (
    <p>
      ✨ ={' '}
      <Switch by={magicNumber}>
        <Case value={0}>Zero</Case>
        <Case value={1}>One</Case>
        <Case value={2}>Two</Case>
        <Case value={3}>Three</Case>

        <Default>Unknown</Default>
      </Switch>
    </p>
  )
}
