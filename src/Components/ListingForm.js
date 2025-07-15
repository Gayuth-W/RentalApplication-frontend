import React from 'react';

function ListingForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div><input name="title" placeholder="Title" value={formData.title} onChange={onChange} /></div>
      <div><input name="location" placeholder="City" value={formData.location} onChange={onChange} /></div>
      <div><input name="address" placeholder="Address" value={formData.address} onChange={onChange} /></div>
      <div><input name="ownerName" placeholder="Owner Name" value={formData.ownerName} onChange={onChange} /></div>
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={onChange} />
      <button type="submit">Post</button>
    </form>
  );
}

export default ListingForm;
