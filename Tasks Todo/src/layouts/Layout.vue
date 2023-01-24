<template>
    <q-layout view="hHh lpR lff"> 
        <q-header elevated class="bg-primary text-white">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>
            <q-icon
                name="mdi-ballot-outline"
                color="secondary"
                size="sm"
                class="q-mr-sm"
            />
            <span class="text-secondary">Task Todo</span>
            </q-toolbar-title>
        </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="200"
            :breakpoint="500"
            bordered
            class="bg-primary"
        >
            <q-list class="q-mt-md">
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
    </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
    </template>

    <script>
    import EssentialLink from 'src/components/EssentialLink.vue'
    import { ref } from 'vue'

    const linksList = [
    {
        title: 'Tarefas',
        icon: 'mdi-calendar-check',
        link: 'https://quasar.dev'
    },
    {
        title: 'Contas',
        icon: 'mdi-cash-multiple',
        link: 'https://github.com/quasarframework'
    },
    {
        title: 'Usuários',
        icon: 'mdi-account',
        link: 'https://chat.quasar.dev'
    },
    ]

    export default {
        setup() {
            const leftDrawerOpen = ref(false);
            return {
                essentialLinks: linksList,
                leftDrawerOpen,
                toggleLeftDrawer() {
                    leftDrawerOpen.value = !leftDrawerOpen.value;
                }
            };
        },
        components: { EssentialLink }
    }
    </script>