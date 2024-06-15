
const Contact = () => {
  return (
    <div className="contact">
   <main>
    <h1 >Contact Us</h1>
    <form>
      <div>
        <label>Name</label>
        <input type="text" required 
        placeholder="ABC" />
       </div>
      <div>
        <label>Email</label>
        <input type="text" required 
        placeholder="abc@xyz.com" />
      </div>
      <div>
        <label>Message</label>
        <input type="text" required 
        placeholder="Tell us about any your query... " />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
   </main>
   </div>
  )
}

export default Contact