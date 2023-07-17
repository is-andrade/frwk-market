import React from 'react';

interface IComposeProvidersProps {
  with: React.ElementType[];
  children: React.ReactNode;
}

export const ComposeProviders = ({
                                   with: Providers,
                                   children,
                                 }: IComposeProvidersProps) => {
  return (
    <>
      {Providers.reduceRight(
        (AccProviders, Provider) => (
          <Provider>{AccProviders}</Provider>
        ),
        children,
      )}
    </>
  );
};
