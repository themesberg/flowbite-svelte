<div>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><OrderedListOutline /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListOutline /></RadioButton>
</div>
  
<ButtonGroup>
    <RadioButton value={"notes"} bind:group={radioGroup}><ListMusicSolid /></RadioButton>
    <RadioButton value={"numbers"} bind:group={radioGroup}><OrderedListOutline /></RadioButton>
    <RadioButton value={"bullets"} bind:group={radioGroup}><ListOutline /></RadioButton>
</ButtonGroup>
  
<p>List style: {radioGroup}</p>