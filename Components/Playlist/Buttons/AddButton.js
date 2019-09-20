import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import AddPlaylistModal from '../AddPlaylistModal'

import { Navigation } from 'react-native-navigation'
import * as NavigationConstants from '../../../NavigationConstants'

const AddButton = ({ style, createAction }) => {
    const navigateToAddPlaylistModal = () => {
        // Navigate to add playlist modal
        Navigation.showOverlay({
            component: {
                id: NavigationConstants.ADD_PLAYLIST_MODAL_NAV_ID,
                name: NavigationConstants.ADD_PLAYLIST_MODAL_NAV_NAME,
                options: {
                    overlay: {
                        interceptTouchOutside: true,
                    },
                },
                passProps: {
                    createAction: createAction,
                },
            },
        })
    }

    return (
        <TouchableOpacity onPress={navigateToAddPlaylistModal} style={style}>
            <Image
                source={{ uri: 'add_playlist_button' }}
                style={{ width: '100%', height: '100%' }}
            />
        </TouchableOpacity>
    )
}

export default AddButton
