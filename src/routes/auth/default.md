---
layout: doc
---

<script>
  import { Confirm, ForgotPassword, Login, Register, Reset} from '$lib/index'
  let message;
  let error;
  let password;
  let email;
  let name;
  let lostPassword ={
    name: 'Lost password',
    href: '/'
  }
  let login=true;
  let rememberMe=false;
  const register =()=>{alert('register')}
</script>

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Register {message} {error} {password} {email} {name} {lostPassword} {login} {rememberMe} {register}/>
</div>

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Login />
</div>



<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ForgotPassword />
</div>

<div
  class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Reset />
</div>


