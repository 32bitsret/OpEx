import ChatWidget from './ChatWidget.vue'
<template>
  <div class="bg-[#001835] overflow-x-hidden max-w-full" id="top">
    <header class="">
      <nav class="absolute container inset-x-0 top-0 z-50 flex items-center justify-between p-6 lg:px-8"
           aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">EveryDayMoney</span>
            <NuxtImg class="h-8 w-auto hidden lg:block" src="/full-logo.svg" alt="Full width logo"/>
            <NuxtImg class="h-8 w-auto lg:hidden" src="/logo.svg" alt="Full width logo"/>
          </a>
        </div>
        <div class="flex items-center">
          <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="`#${item.href}`"
               class="text-xs font-light leading-6 text-white">{{ item.name }}</a>
          </div>
          <div class="hidden lg:flex gap-12 ml-12 lg:flex-1 lg:justify-end items-center">
            <a href="https://business.everydaymoney.app" class="text-white font-light text-xs">Login</a>
            <a type="button" href="https://meet.brevo.com/everydaymoney-meet"
               class="bg-[#1C5ED3] rounded-[22px] bold py-2 px-10  text-xs font-light leading-6 text-white">Sign Up</a>
          </div>
          <div class="lg:ml-28 ml-12 input-menu">
            <UInputMenu class="w-[130px]" v-model="selected" :options="people">
              <template #leading>
                <UAvatar :src="`/${selected?.language}.svg`" size="2xs" />
              </template>
            </UInputMenu>
          </div>
          <div class="flex gap-4 ml-12 lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <UIcon name="i-heroicons-bars-2" class="h-6 w-6 text-white" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"/>
        <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#001835] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">EveryDayMoney</span>
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
                <a href="https://business.everydaymoney.app/auth/login"
                   class="-mx-3 block rounded-[22px] px-7 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log
                  in</a>
                <a href="https://meet.brevo.com/everydaymoney-meet"
                   class="-mx-3 block rounded-[22px] px-7 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Sign
                  up</a>
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
              <a href="https://meet.brevo.com/everydaymoney-meet"
                 class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Get
                a Free Demo</a>
            </div>
          </div>
          <div class="mt-16 flow-root sm:mt-24">
            <div
                class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <NuxtImg src="/app-screenshot.png" alt="App screenshot"
                       class="rounded-md w-full shadow-2xl ring-1 mb-[-20px] ring-gray-900/10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white border-t-2 relative py-24 isolate min-h-[60vh]" id="about">
      <div class="container px-6 lg:px-8">
        <h4 class="text-center text-lg font-semibold">About Us</h4>
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
                  <div class="absolute left-[-30px] rounded-[16px] p-3 bg-[#FF5D31] top-1 text-[#1C5ED3]">
                    <NuxtImg :src="`/${feature.icon}.svg`" class="w-5"/>
                  </div>
                  <span class="text-2xl text-[#040815] font-semibold">{{ feature.name }}</span>
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
    <div class="relative isolate py-24 min-h-[60vh]" id="how-it-works">
      <div class="container px-6 lg:px-8">
        <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden"
             aria-hidden="true">
          <NuxtImg class="w-full" src="/fullbg-logo.svg"/>
        </div>
        <h4 class="uppercase text-sm text-center font-semibold text-[#1C5ED3]">How it Works</h4>
        <h2 class="tracking-[-.3px] text-2xl max-w-2xl mx-auto text-white my-4 text-center font-black">Few Easy Steps and Done</h2>
        <p class="max-w-xl mb-14 mx-auto text-center text-[#90A3BF] tracking-[-.2px]">In just few easy step, you are
          all set to manage your business finances. Manage all expenses with EverdayMoney all in one place.</p>
        <div class="grid w-full md:grid-cols-3 gap-16 max-w-3xl mx-auto">
          <div class="flex flex-col gap-4" v-for="howTo in howTos" :key="howTo.title">
            <NuxtImg class="w-full" :src="`/${howTo.img}.svg`" :alt="howTo.title"/>
            <p class="pl-8 text-center text-white">{{ howTo.title }}</p>
          </div>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://meet.brevo.com/everydaymoney-meet"
             class="rounded-[22px] bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Get
            started for Free</a>
        </div>
      </div>
    </div>
    <div class="bg-white relative isolate py-24 min-h-[60vh]" id="services">
      <div class="container px-6 lg:px-8">
        <h4 class="font-semibold mb-4">Services</h4>
        <div class="grid md:grid-cols-[1fr_2fr] gap-10">
          <h3 class="text-[#1C5ED3] tracking-tight text-2xl lg:text-4xl font-semibold">Do even more with EverydayMoney</h3>
          <p class="text-[#596780] tracking-tight">
            Unlock the Full Potential of Your Startup with Our Comprehensive Suite of Tools and Solutions
            Designed to Optimize Operational Expense Management, Enhance Financial Planning, and Sustain Your
            Business Growth 
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-10 mt-16">
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Carryout local & cross-border transfer</h4>
            <ul class="list-disc pl-7">
              <li> Pay suppliers from any part of the world  Pay by transfers</li>
              <li> Pay by transfers</li>
              <li> Refund employees</li>
            </ul>
          </div>
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Card Management</h4>
            <ul class="list-disc pl-7">
              <li> Issue Virtual Cards for all online payments</li>
              <li> Issue Physical cards for off-line and online payments</li>
              <li> Assign Virtual and Physical cards to budgets</li>
              <li> Assign Payment cards to Employees</li>
            </ul>
            <h4 class="tracking-tight text-lg mt-10 font-semibold mb-2">Accounting</h4>
            <ul class="list-disc pl-7">
              <li>Synchronise your expense data with your accounting software</li>
            </ul>
          </div>
          <div class="">
            <h4 class="tracking-tight text-lg font-semibold mb-2">Payroll</h4>
            <ul class="list-disc pl-7">
              <li> Employee management</li>
              <li> Pay Your Employees </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="relative isolate py-24 bg-[#FF5D31] min-h-[60vh]">
      <div class="container px-6 lg:px-8">
        <h4 class="uppercase text-md text-center font-bold text-[#0D243F]">What they say</h4>
        <h2 class="tracking-[-.3px] text-4xl max-w-2xl mx-auto text-white my-4 text-center font-bold">Our Users Kind
          Words</h2>
        <p class="max-w-2xl mb-14 mx-auto text-center text-white tracking-[-.2px]">Hear from startups like yours about
          how EverydayMoney has transformed their operational expense management and helped sustain their financial
          runway.</p>
        <div class="mt-16">
          <UCarousel v-slot="{ item, index }" ref="carouselRef" :items="carouselItems"
                     :ui="{ container: 'gap-10 pb-12', item: 'snap-start lg:w-1/3 sm:w-1/2 w-full', arrows: { wrapper:
                     'slider-icons'
                     } }"
                     arrows>
            <figure class="rounded-[16px] flex flex-col justify-between bg-[#FF3F0A] p-8 text-sm leading-6">
              <div>
                <h4 class="text-white font-semibold mb-2">{{ item.title }}</h4>
                <blockquote class="text-white font-light">
                  <p>{{ `“${item.subtitle}”` }}</p>
                </blockquote>
              </div>
              <figcaption class="mt-6 flex border-t-[1px] border-gray-200/20 pt-4 items-center gap-x-4">
                <NuxtImg class="h-10 w-10 rounded-[16px] bg-gray-50" :src="`/${item.avatar.src}.png`" alt=""/>
                <div>
                  <div class="font-semibold text-white">{{ item.name }}</div>
                  <div class="text-white">{{ `${item.position}` }}</div>
                </div>
              </figcaption>
            </figure>
          </UCarousel>
        </div>
      </div>
    </div>

    <div class="relative isolate pt-24 min-h-[30vh]">
      <div class="absolute inset-x-0 top-[50%] translate-y-[-50%] -z-10 transform-gpu overflow-hidden opacity-5"
           aria-hidden="true">
        <NuxtImg class="md:w-[50%] w-full" src="/header-logo.svg"/>
      </div>
      <div class="container px-6 lg:px-8">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4 pb-24">
            <div class="lg:max-w-lg">
              <h2 class="mt-2 text-3xl text-white font-bold tracking-tight sm:text-4xl">Start Track Your
                Business
                Expenses Today</h2>
              <p class="mt-6 text-lg leading-8 text-[#596780]">Are you ready to make your business more organized? Join
                Us
                Now!</p>
            </div>
            <a href="#"
               class="rounded-[22px] inline-block mt-16 bg-[#1C5ED3] px-7 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C5ED3]">Join
              Us Now!</a>
          </div>
          <div>
            <NuxtImg src="/last-banner.svg"
                     alt="Banner screenshot"
                     class="w-full lg:min-w-[55vw] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 mb-[-20px]"/>
          </div>
        </div>
      </div>
    </div>
    <footer class="relative bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <NuxtImg class="h-7" src="/footer-logo.svg"
                     alt="EDM Logo"/>
            <p class="text-sm leading-6 text-gray-600">Data visualization, and expense management
              for your business.</p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid xl:justify-items-end md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.product" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.company" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid xl:justify-items-end md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Resources</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.resources" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-gray-900">Follow Us</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in footerNavigation.follow" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 pb-24 border-t border-gray-900/10 pt-8 md:flex justify-between sm:mt-20 lg:mt-24">
          <div
              class="flex items-center mb-6 md:mb-0 justify-center space-x-4 text-sm font-semibold leading-6 text-slate-500">
            <a class="text-[#1A202C]" href="https://blog.everydaymoney.app/privacy-policy">Privacy policy</a>
            <div class="h-4 w-px bg-slate-500/60"></div>
            <a class="text-[#1A202C]" href="#">Terms & Conditions</a>
            <div class="h-4 w-px bg-slate-500/60"></div>
            <a class="text-[#1A202C]" href="#">Cookie Policy</a>
          </div>
          <p class="text-xs leading-5 text-center md:text-right text-gray-700">&copy; 2024 Everydaymoney. All rights
            reserved.</p>
        </div>
      </div>
    </footer>
    <div class="bg-gray-100 py-6 flex flex-col justify-center">
      <div v-if="cookie"
           class="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-[10px] rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
        <div class="w-full">This website uses cookies to ensure you get the best experience on our website.</div>
        <div class="flex gap-4 items-center flex-shrink-0">
          <!-- setTimeout is for demo purposes only. Remove it & add to cookies
               so that the popup won't appear next time they load. -->
          <button @click="cookie = false"
                  class="text-indigo-600 focus:outline-none hover:underline">Decline
          </button>
          <button @click="cookie = false"
                  class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow
            Cookies
          </button>
        </div>
      </div>
    </div>
  </div>
  <ChatWidget />
</template>

<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {Dialog, DialogPanel, RadioGroup, RadioGroupLabel, RadioGroupOption} from "@headlessui/vue"
import {useStore} from "~/store"

const people = [{
  id: '1',
  label: 'Nigeria',
  language: 'en'
}, {
  id: '2',
  label: 'French',
  language: 'fr'
}]

const selected = ref(people[0])

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
const localeRoute = useLocaleRoute()
const carouselRef = ref()
const store = useStore()
const {
  cookie,
  navigation,
  howTos,
  features,
  carouselItems,
  frequencies,
  pricingTiers,
  footerNavigation
} = storeToRefs(store)


onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
const mobileMenuOpen = ref(false)
const frequency = ref(frequencies.value[0])
</script>

<style>
* {
  font-family: Poppins, sans-serif;
}

body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}

.input-menu input {
  background: transparent;
  color: #fafafa;
  box-shadow: none !important;
  outline: none !important;
}

.slider-icons {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: row-reverse;
  width: 140px;
}

.slider-icons button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-icons button:last-of-type {
  right: 0;
}

</style>