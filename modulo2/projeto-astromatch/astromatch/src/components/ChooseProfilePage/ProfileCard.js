import React from 'react';
import styled from 'styled-components';

const ProfileCardContainer = styled.div`
margin:16px;
border: 1px solid black;
max-height: 650px;
border-radius: 10px;

`

const ProfilePicture = styled.img`
width: 100%;
display: block;
border-radius: 10px;
max-height: 350px
`
const ProfileInfo = styled.div`
border: 1px solid black;
padding: 0 15px;
`


function ProfileCard(props) {
    const profile = props.profile
    
    return (
        <ProfileCardContainer >
<ProfilePicture src={profile.photo}/>
       <ProfileInfo>
       <p>{profile.name}, {profile.age}</p>
       <p>{profile.bio}</p>
       </ProfileInfo>
       </ProfileCardContainer >
    )
}
export default ProfileCard;