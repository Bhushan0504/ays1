import React, {Component} from 'react';
import { Control, } from 'react-redux-form';
import video from '../videos/videosignin.mp4';
import { Container, FormWrap, Icon, FormContent, Form, Formside, Formgrid, IndexBg, VideoBg, FormH1, FormLabel, FormButton } from './WorkerSignupComponentElements';
class Signup_worker extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      this.props.postWorker(values.naam,values.experience,values.phno,values.gender,values.area,values.specialization);
        // event.preventDefault();
    }

    render(){
        return(
            <>
            <Container>
              <FormWrap>
                <Icon to='/'>At Your Service</Icon>
                <FormContent>
                  <Form onSubmit={(values) => this.handleSubmit(values)}>
                    <FormH1>Sign up to our application</FormH1>
                    <Formside>
                    <FormLabel htmlFor="naam">Name</FormLabel>
                         <Control.text model=".naam" id="naam" name="naam"
                                              placeholder="Name"
                                              className="form-control"
                                               />
                        </Formside>
                      <Formside>
                      <FormLabel htmlFor="experience">Experience</FormLabel>
                      <div>
                        <Control.text model=".experience" id="experience" name="experience"
                                              placeholder="Experience"
                                              className="form-control"
                                               />
                        </div>
                        </Formside>
                        <Formside>   
                    <FormLabel htmlFor="phno">Ph no.</FormLabel>
                    <div>
                  <Control.text model=".phno" id="phno" name="phno"
                                              placeholder="Ph no."
                                              className="form-control"
                                               />
                 </div>
      
                 </Formside>
                  <Formside>
                 <FormLabel htmlFor="gender">Gender</FormLabel>
                    <div>
                  <Control.text model=".gender" id="gender" name="gender"
                                              placeholder="Gender"
                                              className="form-control" />
                 </div>
                 </Formside>

                 <Formside>
                 <FormLabel htmlFor="area">Area</FormLabel>
                    <div>
                  <Control.text model=".area" id="area" name="area"
                                              placeholder="Area"
                                              className="form-control" />
                 </div>
                 </Formside>
      
                 <Formside>
                 <FormLabel htmlFor="specialization">Specialization</FormLabel>
                 <div>
                  <Control.text model=".specialization" id="specialization" name="specialization"
                                              placeholder="Specialization"
                                              className="form-control" />
                 </div>
                 </Formside>
              
                    <FormButton to='' type='submit' primary='' dark='false' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Submit </FormButton>
              
              </Form>
              </FormContent>
              </FormWrap>
              <IndexBg>
              <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </IndexBg>
            </Container>
          </>
        )
    }
}

export default Signup_worker;