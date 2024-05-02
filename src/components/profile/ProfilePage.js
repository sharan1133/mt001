/*import React from 'react';
import { useLocation } from 'react-router-dom';
//import Profile from "./components/profile/Profile";

const ProfilePage= () => {
  const location = useLocation();
  const { profileData } = location.state || {};


console.log("hello");
console.log('profileData:', profileData);


  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Profile Details</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <img
                    src="https://via.placeholder.com/150"
                    className="img-fluid rounded-circle shadow"
                    alt="Profile"
                  />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-3">{profileData.name}</h4>
                  <div className="mb-2">
                    <strong>Age:</strong> {profileData.age}
                  </div>
                  <div className="mb-2">
                    <strong>Qualification:</strong> {profileData.qualification}
                  </div>
                  <div className="mb-2">
                    <strong>Religion:</strong> {profileData.religion}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; */ 




/*import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <div className="avatar mt-8">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-full"
                alt="Profile"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-primary">
            {profileData.name}
          </h2>
          <div className="mt-4">
            <div className="badge badge-primary font-bold mb-2">
              {profileData.age} years old
            </div>
            <div className="badge badge-primary font-bold mb-2">
              {profileData.qualification}
            </div>
            <div className="badge badge-primary font-bold mb-2">
              {profileData.religion}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; */










/*import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ProfileCard = styled.div`
  max-width: 800px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const ProfileHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const ProfileBody = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileName = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const ProfileDetailItem = styled.div`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileHeader>
          <h1>Profile Details</h1>
        </ProfileHeader>
        <ProfileBody>
          <ProfileImage
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <ProfileDetails>
            <ProfileName>{profileData.name}</ProfileName>
            <ProfileDetailItem>
              <strong>Age:</strong> {profileData.age}
            </ProfileDetailItem>
            <ProfileDetailItem>
              <strong>Qualification:</strong> {profileData.qualification}
            </ProfileDetailItem>
            <ProfileDetailItem>
              <strong>Religion:</strong> {profileData.religion}
            </ProfileDetailItem>
          </ProfileDetails>
        </ProfileBody>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;*/













/*import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
          <Card className="shadow-sm">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>{profileData.name}</Card.Title>
              <Card.Text>
                <p>
                  <strong>Age:</strong> {profileData.age}
                </p>
                <p>
                  <strong>Qualification:</strong> {profileData.qualification}
                </p>
                <p>
                  <strong>Religion:</strong> {profileData.religion}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;*/





/*import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
`;

const ProfileCard = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const ProfileHeader = styled.div`
  background-color: #2c3e50;
  color: #ffffff;
  padding: 40px;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
`;

const ProfileName = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ProfileDetails = styled.div`
  padding: 40px;
`;

const ProfileDetailItem = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data available.</div>;
  }

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileHeader>
          <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
          <div>
            <ProfileName>{profileData.name}</ProfileName>
            <div>
              <strong>Age:</strong> {profileData.age}
            </div>
          </div>
        </ProfileHeader>
        <ProfileDetails>
          <ProfileDetailItem>
            <strong>Qualification:</strong> {profileData.qualification}
          </ProfileDetailItem>
          <ProfileDetailItem>
            <strong>Religion:</strong> {profileData.religion}
          </ProfileDetailItem>
        </ProfileDetails>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage; */





import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
`;

const ProfileCard = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding: 40px;
`;

const ProfileHeader = styled.div`
  background-color: #2c3e50;
  color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProfileName = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ProfileDetails = styled.div`
  padding: 20px;
`;

const ProfileDetailItem = styled.div`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const ProfileSummary = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ProfileEducation = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ProfileBasicDetails = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const ProfilePage = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data available.</div>;
  }


   const summary = "Passionate about technology and innovation. Enjoys coding and exploring new technologies.";
  const education = "Bachelor's Degree in Computer Science, University of XYZ";
  const basicDetails = "Gender: Female, Location: City, Country: Country";	



  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileHeader>
          <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJUuxhrb6FF0DLvPzLmOCYAOw0NZEV9NIEVoCxvh53A&s" alt="Profile" />
          <div>
            <ProfileName>{profileData.name}</ProfileName>
            <div>
              <strong>Age:</strong> {profileData.age}
            </div>
          </div>
          <div>
            <Button variant="primary" size="lg">
              Edit Profile
            </Button>
          </div>
        </ProfileHeader>
        <ProfileSummary>
          {summary}
        </ProfileSummary>
        <ProfileEducation>
          <h3>Education:</h3>
          {education}
        </ProfileEducation>
        <ProfileBasicDetails>
          <h3>Basic Details:</h3>
          {basicDetails}
        </ProfileBasicDetails>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage; 








