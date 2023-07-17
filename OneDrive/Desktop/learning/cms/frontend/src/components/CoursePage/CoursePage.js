import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../layouts/Loader/Loader';
import intro from '../../assets/videos/intro.mp4';
const lectures = [{
    _id:"1" ,
    title:"title",
    description:"description",
    video:{
        url:"video1"
    }
},{
    _id:"2" ,
    title:"title1",
    description:"description1",
    video:{
        url:"video1"
    }
},{
    _id:"3" ,
    title:"title3",
    description:"description3",
    video:{
        url:"video1"
    }
},]

const CoursePage = () => {
    const [ lectureNumber,  setLectureNumber]= useState(0)

    return (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            <Box>
                <video
                    width={'100%'}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={intro}
                />

               
            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>
          <VStack>

            {
                lectures.map((element, index)=>(
                    <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
                ))}
          </VStack>
        
        </Grid>
    )
}

export default CoursePage
