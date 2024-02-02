<div>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><OrdoredListSolid /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListSolid /></RadioButton>
</div>
  
<ButtonGroup>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><OrdoredListSolid /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListSolid /></RadioButton>
</ButtonGroup>
  
<p>List style: {radioGroup}</p>