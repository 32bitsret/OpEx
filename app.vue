<template>
  <div class="bg-[#001835]">
    <header class="">
      <nav class="absolute container inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-8"
           aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">EveryDayMoney</span>
            <NuxtImg class="h-8 w-auto" src="/full-logo.svg" alt="Full width logo"/>
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <UIcon name="i-heroicons-bars-2" class="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
               class="text-xs font-light leading-6 text-white">{{ item.name }}</a>
          </div>
          <div class="hidden lg:ml-28 lg:flex gap-12 lg:flex-1 lg:justify-end items-center">
            <a href="#" class="text-white font-light text-xs">Login</a>
            <a type="button" href="#"
               class="bg-[#1C5ED3] rounded-[22px] bold py-2 px-10  text-xs font-light leading-6 text-white">Sign Up</a>
          </div>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#001835] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <NuxtImg class="h-8 w-auto" src="/logo.svg" alt="Full width logo"/>
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <UIcon name="i-heroicons-x-mark" class="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-[22px] px-7 py-2 font-semibold text-base leading-7 text-white hover:text-[#1C5ED3] hover:bg-gray-50">{{
                    item.name
                  }}
                </a>
              </div>
              <div class="py-6">
                <a href="#"
                   class="-mx-3 block rounded-[22px] px-7 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate pt-14">

      <div class="absolute inset-x-0 top-[50%] translate-y-[-50%] -z-10 transform-gpu overflow-hidden opacity-5"
           aria-hidden="true">
        <NuxtImg class="md:w-[50%] w-full" src="/header-logo.svg"/>
      </div>
      <div class="pt-24 sm:pt-32">
        <div class="container px-6 lg:px-8">
          <div class="mx-auto w-full
           text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white md:text-7xl">Manage Your Startup's OpEx Efficiently
              with EverydayMoney</h1>
            <p class="mt-6 md:text-2xl text-lg leading-8 font-light text-[#90A3BF]">Sustain your financial runway and
              gain insights into your day-to-day expenses.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"
                 class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                started for Free</a>
              <a href="#" class="text-sm rounded-[22px] px-7 py-2.5 font-semibold bg-[#1A202C] leading-6 text-white">See
                Pricing</a>
            </div>
          </div>
          <div class="mt-16 flow-root sm:mt-24">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <NuxtImg src="/app-screenshot.png" alt="App screenshot"
                       class="rounded-md shadow-2xl ring-1 ring-gray-900/10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white relative py-24 isolate min-h-[60vh]">
      <div class="container px-6 lg:px-8">
        <h4 class="text-center text-lg">About Us</h4>
        <h2 class="font-bold text-[#1C5ED3] text-4xl text-center my-4 tracking-tight">Helping Startups Manage
          Operational Expenses</h2>
        <p class="text-[#596780] text-lg max-w-2xl mx-auto text-center opacity-[.64]">EverydayMoney helps startups
          manage
          their operational expenses (OpEx) effectively. We provide tools to schedule expenses, control spending, and
          sustain your financial runway. Join us to gain insights and take control of your business's finances.</p>
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 mt-16 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <dl class="max-w-xl pl-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt>
                  <div class="absolute left-[-30px] rounded-[16px] p-3 bg-[#FF5D31] top-1 text-indigo-600">
                    <NuxtImg :src="`/${feature.icon}.svg`" class="w-5"/>
                  </div>
                  <span class="text-2xl text-[#040815] font-medium">{{ feature.name }}</span>
                </dt>
                {{ ' ' }}
                <dd class="text-sm text-[#596780]">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
          <NuxtImg src="/product.svg"
                   alt="Product screenshot"
                   class="w-full"/>
        </div>
      </div>
    </div>
    <div class="relative isolate py-24 min-h-[60vh]">
      <div class="container px-6 lg:px-8">
        <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden"
             aria-hidden="true">
          <NuxtImg class="w-full" src="/fullbg-logo.svg"/>
        </div>
        <h4 class="uppercase text-sm text-center font-semibold text-[#1C5ED3]">How it Works</h4>
        <h2 class="tracking-[-.3px] text-2xl max-w-2xl mx-auto text-white my-4 text-center font-black">Few Easy Steps
          and
          Done</h2>
        <p class="max-w-lg mb-14 mx-auto text-center text-[#90A3BF] tracking-[-.2px]">In just few easy step, you are all
          set to
          manage your business finances. Manage all expenses with EverdayMoney all in one place.</p>
        <div class="grid w-full grid-cols-3 gap-16 max-w-3xl mx-auto">
          <div class="flex flex-col gap-4" v-for="howTo in howTos" :key="howTo.title">
            <NuxtImg class="w-full" :src="`/${howTo.img}.svg`" :alt="howTo.title"/>
            <p class="pl-8 text-center text-white">{{ howTo.title }}</p>
          </div>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"
             class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
            started for Free</a>
          <a href="#" class="text-sm rounded-[22px] px-7 py-2.5 font-semibold bg-[#1A202C] leading-6 text-white">See
            Pricing</a>
        </div>
      </div>
    </div>
    <div class="relative isolate py-24 bg-[#FF5D31] min-h-[60vh]">
      <div class="container px-6 lg:px-8">

      </div>
    </div>
  </div>
</template>

<script setup>
/* import {definePageMeta} from "nuxt/dist/pages/runtime";

 definePageMeta({
 colorMode: 'light',
})*/
import {Dialog, DialogPanel} from "@headlessui/vue";

const navigation = [
  {name: 'About Us', href: '#'},
  {name: 'How it Works', href: '#'},
  {name: 'Pricing', href: '#'},
]

const howTos = [
  {title: 'Register your Spend.In account.', img: 'how-1'},
  {title: 'Fill in the list of your business expenses.', img: 'how-2'},
  {title: 'Done, let’s continue the work.', img: 'how-3'},
]

const features = [
  {
    name: 'Sustain your financial runway with efficient OpEx management',
    description: 'Efficient OpEx management to keep your business running smoothly.',
    icon: 'wallet-check',
  },
  {
    name: 'Gain insights and control over your day-to-day expenses',
    description: 'Understand and control your day-to-day expenses.',
    icon: 'eye',
  },
  {
    name: 'Plan for the future with accurate expense forecasts',
    description: '',
    icon: 'status-up',
  },
]

const mobileMenuOpen = ref(false)
</script>

<style>
* {
  font-family: Poppins, sans-serif;
}

body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>
