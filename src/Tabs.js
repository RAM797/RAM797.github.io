import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function IconTabs({onTabChange}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<HomeIcon />} iconPosition="start" label="Home" />
      <Tab icon={<SchoolIcon />} iconPosition="start" label="Education" />
      <Tab icon={<WorkIcon />} iconPosition="start" label="Experience" />
      <Tab icon={<GitHubIcon />} iconPosition="start" label="Projects" />
      <Tab icon={<CodeIcon />} iconPosition="start" label="Skills" />
    </Tabs>
  );
}