import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Text } from '@react-navigation/elements'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
            >
                <Image source={icon} tintColor="#151312" className='size-5' />
                <Text className='text-secondary text-base font-semibold'>{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View className='size-full justify-center items-center mt-4'>
            <Image source={icon} tintColor="#A8B5DB" className='size-5' />
        </View>
    )

}

const _layout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: "#0f0d23",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#0f0d23',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title="Home" />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    headerShown: false,
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title="Search" />
                    )
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    headerShown: false,
                    title: 'Saved',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.save} title="Saved" />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout