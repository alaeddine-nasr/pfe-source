using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ApexiaHR_Pfe.Models;

namespace ApexiaHR_Pfe.Controllers
{
    public class TimeSettings1Controller : ApiController
    {
        private ProjectDataBaseEntities db = new ProjectDataBaseEntities();

        // GET: api/TimeSettings1
        public IQueryable<TimeSetting> GetTimeSetting()
        {
            return db.TimeSetting;
        }

        // GET: api/TimeSettings1/5
        [ResponseType(typeof(TimeSetting))]
        public IHttpActionResult GetTimeSetting(int id)
        {
            TimeSetting timeSetting = db.TimeSetting.Find(id);
            if (timeSetting == null)
            {
                return NotFound();
            }

            return Ok(timeSetting);
        }

        // PUT: api/TimeSettings1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTimeSetting(int id, TimeSetting timeSetting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != timeSetting.TimeSettingID)
            {
                return BadRequest();
            }

            db.Entry(timeSetting).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeSettingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TimeSettings1
        [ResponseType(typeof(TimeSetting))]
        public IHttpActionResult PostTimeSetting(TimeSetting timeSetting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            timeSetting.TimeSettingID = new int();
            db.TimeSetting.Add(timeSetting);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = timeSetting.TimeSettingID }, timeSetting);
        }

        // DELETE: api/TimeSettings1/5
        [ResponseType(typeof(TimeSetting))]
        public IHttpActionResult DeleteTimeSetting(int id)
        {
            TimeSetting timeSetting = db.TimeSetting.Find(id);
            if (timeSetting == null)
            {
                return NotFound();
            }

            db.TimeSetting.Remove(timeSetting);
            db.SaveChanges();

            return Ok(timeSetting);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TimeSettingExists(int id)
        {
            return db.TimeSetting.Count(e => e.TimeSettingID == id) > 0;
        }
    }
}