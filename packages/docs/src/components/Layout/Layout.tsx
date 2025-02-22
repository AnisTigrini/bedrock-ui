import { IconBrandGithub, IconMenu2 } from '@tabler/icons';
import { Button, Flex, Header, Heading, Hidden, Link } from '@bedrock-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LeftPanel } from 'components/LeftPanel';
import styles from './Layout.module.css';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const { pathname } = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  if (pathname === '/') {
    return <>{children}</>;
  }

  return (
    <>
      <Header position="fixed" style={{ zIndex: 1000 }}>
        <Flex justifyContent="space-between" style={{ width: '100%' }}>
          <Hidden on={{ mobile: false, tablet: true, desktop: true }}>
            <Flex>
              <Button onClick={() => setOpen(!open)} variant="text">
                <IconMenu2 size={24} />
              </Button>
            </Flex>
          </Hidden>

          <Flex flexDirection="column" justifyContent="center">
            <NextLink href="/">
              <Heading level={4} style={{ cursor: 'pointer' }}>
                Bedrock UI
              </Heading>
            </NextLink>
          </Flex>

          <Flex>
            <Flex flexDirection="column" justifyContent="center" mx={6}>
              <NextLink href="/blog" passHref>
                <Link>Blog</Link>
              </NextLink>
            </Flex>

            <Button
              onClick={() => window.open('https://github.com/matthewwolfe/bedrock-ui', '_blank')}
              square
              variant="text"
            >
              <IconBrandGithub size={24} />
            </Button>
          </Flex>
        </Flex>
      </Header>

      <Flex pt={16}>
        {pathname.startsWith('/blog') ? (
          children
        ) : (
          <>
            <LeftPanel open={open} onClose={() => setOpen(false)} />
            <Flex className={styles.content}>{children}</Flex>
          </>
        )}
      </Flex>
    </>
  );
}

export default Layout;
