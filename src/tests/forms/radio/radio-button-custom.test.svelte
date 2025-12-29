<script lang="ts">
  import { RadioButton } from "$lib";
</script>

<div>
  <RadioButton 
    name="custom" 
    value="custom1" 
    class="custom-class"
    data-testid="custom-radio"
    id="radio-custom-1"
    checkedClass="custom-checked-class"
  >
    Custom Radio
  </RadioButton>
  <RadioButton 
    name="custom" 
    value="custom2"
    disabled
    data-testid="disabled-radio"
  >
    Disabled Radio
  </RadioButton>
</div>
