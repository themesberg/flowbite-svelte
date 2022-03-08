<script>
	import {
		ColorShadowButton,
		GradientDuotoneButton,
		GradientMonochromeButton,
		GradientOutlineButton
	} from '$lib/index';

	function handleClick() {
		alert('Button Clicked');
	}
</script>

<div class="w-full py-8">
	<ColorShadowButton color="blue" on:click={handleClick}>Blue</ColorShadowButton>
	<ColorShadowButton color="green">Green</ColorShadowButton>
	<ColorShadowButton color="cyan">Cyan</ColorShadowButton>
	<ColorShadowButton color="teal">Teal</ColorShadowButton>
	<ColorShadowButton color="lime">Lime</ColorShadowButton>
	<ColorShadowButton color="red">Red</ColorShadowButton>
	<ColorShadowButton color="pink">Pink</ColorShadowButton>
	<ColorShadowButton color="purple">Purple</ColorShadowButton>
</div>

<div>
	<GradientDuotoneButton color="purple2blue">Purple to blue</GradientDuotoneButton>
	<GradientDuotoneButton color="cyan2blue">Cyan to blue</GradientDuotoneButton>
	<GradientDuotoneButton color="green2blue">Green to blue</GradientDuotoneButton>
	<GradientDuotoneButton color="purple2pink">Purple to pink</GradientDuotoneButton>
	<GradientDuotoneButton color="pink2orange">Pink to orange</GradientDuotoneButton>
	<GradientDuotoneButton color="teal2lime">Teal to lime</GradientDuotoneButton>
	<GradientDuotoneButton color="red2yellow">Red to yellow</GradientDuotoneButton>
</div>

<div class="w-full py-8">
	'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple
	<GradientMonochromeButton />
	<GradientMonochromeButton color="green" />
	<GradientMonochromeButton color="cyan" />
	<GradientMonochromeButton color="teal" />
	<GradientMonochromeButton color="lime" />
	<GradientMonochromeButton color="red" />
	<GradientMonochromeButton color="pink" />
	<GradientMonochromeButton color="purple" />
</div>

<div class="w-full py-8">
	'purple2blue' | 'cyan2blue' | 'green2blue' | 'purple2pink' | 'pink2orange' | 'teal2lime' |
	'red2yellow'
	<GradientOutlineButton />
	<GradientOutlineButton color="cyan2blue" textSize="text-base" />
	<GradientOutlineButton color="green2blue" />
	<GradientOutlineButton color="purple2pink" />
	<GradientOutlineButton color="pink2orange" />
	<GradientOutlineButton color="teal2lime" />
	<GradientOutlineButton color="red2yellow" />
</div>
