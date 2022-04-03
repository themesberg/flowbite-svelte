<script>
	import { SmallModal, ModalButton, modalIdStore } from '$lib/index';

	let mymodal;
	// small
	let smallModalId = 'small-modal';
	let btnSName = 'Small Modal';
	let titleS = 'Small Modal Title';
	let btnS1 = 'I accept';
	let btnS2 = 'Decline';

	const handlebtnS1 = () => {
		alert('handlebtnS1 is clicked from a parent page.');
		mymodal.closeModal();
	};

	const handlebtnS2 = () => {
		alert('handlebtnS2 is clicked from a parent page.');
		mymodal.closeModal();
	};
</script>

<ModalButton id={smallModalId} btnName={btnSName} />
<SmallModal
	bind:this={mymodal}
	showModalId="testmodal"
	title={titleS}
	btn1={btnS1}
	btn2={btnS2}
	on:handlebtn1={handlebtnS1}
	on:handlebtn2={handlebtnS2}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
</SmallModal>
