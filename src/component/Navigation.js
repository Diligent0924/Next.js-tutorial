import 'semantic-ui-css/semantic.min.css'
import { useRouter } from "next/router";
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import styles from '../component_css/Navigation.module.css'

export default function Navigation() {
  const router = useRouter();
  let activeItem;

  return (
      <Menu compact icon='labeled' vertical className={styles.Menu}>
        <Menu.Item
          name='Introduce'
          active={activeItem === 'Introduce'}
          onClick={() => router.push("/Introduce")}
          className={styles.item}
        >
          <Icon name='user secret' />
          Introduce
        </Menu.Item>

        <Menu.Item
          active={activeItem === 'Project'}
          onClick={() => router.push("/project")}
          className={styles.item}
        >
          <Icon name='chart bar' />
          Project
        </Menu.Item>

        <Menu.Item
          name='skill'
          active={activeItem === 'skill'}
          onClick={() => router.push("/skills")}
          className={styles.item}
        >
          <Icon name='copy' />
          Skill
        </Menu.Item>

        <Menu.Item
          name='address book'
          active={activeItem === 'address book'}
          onClick={() => router.push("/")}
          className={styles.item}
        >
          <Icon name='address book' />
          Contact
        </Menu.Item>
      </Menu>  
  );
}