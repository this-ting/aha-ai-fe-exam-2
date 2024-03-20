'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { Headline3, Headline5, Subtitle } from '@/components/typography';
import useInput from '@/hooks/useInput';

export default function SearchContainer() {
  const [value, changeValue] = useInput('');
  return (
    <div>
      <Headline5>Search</Headline5>
      <Input placeholder="Keyword" value={value} onChange={changeValue} />
      <br />
      <hr className="border-white10" />
      <br />
      <Headline5># Results per Page</Headline5>
      <div className="flex items-end">
        <Headline3>30</Headline3>
        <Subtitle>results</Subtitle>
      </div>
      <Button variant="normal">Search</Button>
    </div>
  );
}
