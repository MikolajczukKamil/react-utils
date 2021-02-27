# React utils

## For
The simple wrapper for looping in react, similar effect to Angular `*ngFor="?"`

```typescript jsx
// Default 
{
    ['💻', '📌', '🎧', '😊']
        .map((img, i) => <p key={i}>{img} - {i}</p>)
}

// Usage
<For of={['💻', '📌', '🎧', '😊']}>
    {(img, i) => <p key={i}>{img} - {i}</p>}
</For>
```

## If
Render React components conditionally., similar effect to Angular `*ngIf="?"`

```typescript jsx
// Default 
{
    (magicNumber < 0.5) && 'Too little 💚' ||
    (magicNumber <= 6) && 'Average 💎' ||
    'Many 🧡'
}

// Usage
<If con={magicNumber < 4}>
    <Then> Too little 💚 </Then>
    <ElseIf con={magicNumber <= 6}> Average 💎 </ElseIf>
    <Else> Many 🧡 </Else>
</If>
```

## Switch
Render React components conditionally., similar effect to Angular `[ngSwitch]="?"`

```typescript jsx
// Default 
{
    (magicNumber === 0) && 'Zero' ||
    (magicNumber === 1) && 'One' ||
    (magicNumber === 2) && 'Two' ||
    (magicNumber === 3) && 'Three' ||
    'Unknown'
}

// Usage
<Switch by={magicNumber}>
    <Case value={0}>Zero</Case>
    <Case value={1}>One</Case>
    <Case value={2}>Two</Case>
    <Case value={3}>Three</Case>

    <Default>Unknown</Default>
</Switch>
```
