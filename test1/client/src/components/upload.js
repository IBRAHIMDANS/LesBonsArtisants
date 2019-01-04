import React, { Component } from 'react'
import {
    Button,
    Badge,
    Pane,
    Text
} from 'evergreen-ui'
import axios from 'axios'


export default class Upload extends Component {

state = {
    selectedFile: null,
    loaded: 0,
}

handleselectedFile = event => {
    this.setState({
        selectedFile: event.target.files[0],
    })
}

handleUpload = () => {
    // (this.state.selectedFile.name === null) ? console.log('err') : 
    // console.log('filenamenotnul')
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios.post('http://localhost:8080/upload', data, {
        onUploadProgress: ProgressEvent => {
            this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
            })
        },
    })
    .then(res => {
        console.log('statusCode :'+res.status)
        console.log(res.statusText)
    })
    .catch(res => {
        console.log('statusCode :' + res.status)
        console.log(res.statusText)
    })
    
}

render() {
    return (
        <>
         <input type = "file"
         name = ""
         id = ""
         onChange = { this.handleselectedFile } >
        </input>
        <Button onClick ={ this.handleUpload }> Upload </Button> 
        <Pane display="flex"     justifyContent="center" alignItems="center" margin={0}>
        <Text  width='auto' height='auto' fontSize={30} >{ Math.round(this.state.loaded, 2) } % </Text>
        </Pane>
        { (this.state.loaded === 100) ?  <Badge color="green"> File was Uploaded successfully </Badge> : <div > </div> }

      </>
    )
  }
}
