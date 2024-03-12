'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import useInput from '@/hooks/useInput';

export default function SearchContainer() {
  const [value, changeValue] = useInput('');
  return (
    <div>
      <h1>Search</h1>
      <Input placeholder="Keyword" value={value} onChange={changeValue} />
      <h1># Results per Page</h1>
      <Button variant="normal">Search</Button>
    </div>
  );
}
