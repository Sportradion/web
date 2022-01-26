import React, { useContext } from "react";
import DataContext from "../contexts/dataContext";
import { TaskBar, List } from "@react95/core";
import styled from "styled-components";
import { startWebamp } from "../utils/startWebamp";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

function Taskbar() {
  const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
  console.log(projectRepo, react95Repo);
  return (
    <TaskBar
      list={
        <List>
          <List.Item className="pointer" icon="media_cd">
            <Link target="_blank">Kommer snart</Link>
          </List.Item>
        </List>
      }
    />
  );
}

export default Taskbar;
