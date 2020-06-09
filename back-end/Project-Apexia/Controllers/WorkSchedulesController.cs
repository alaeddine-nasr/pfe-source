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
using Project_Apexia.Models;

namespace Project_Apexia.Controllers
{
    public class WorkSchedulesController : ApiController
    {
        private PFEDBEntities db = new PFEDBEntities();

        // GET: api/WorkSchedules
        public IQueryable<WorkSchedule> GetWorkSchedules()
        {
            return db.WorkSchedules;
        }

        // GET: api/WorkSchedules/5
        [ResponseType(typeof(WorkSchedule))]
        public IHttpActionResult GetWorkSchedule(int id)
        {
            WorkSchedule workSchedule = db.WorkSchedules.Find(id);
            if (workSchedule == null)
            {
                return NotFound();
            }

            return Ok(workSchedule);
        }

        // PUT: api/WorkSchedules/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWorkSchedule(int id, WorkSchedule workSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workSchedule.WorkScheduleID)
            {
                return BadRequest();
            }

            db.Entry(workSchedule).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkScheduleExists(id))
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

        // POST: api/WorkSchedules
        [ResponseType(typeof(WorkSchedule))]
        public IHttpActionResult PostWorkSchedule(WorkSchedule workSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WorkSchedules.Add(workSchedule);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = workSchedule.WorkScheduleID }, workSchedule);
        }

        // DELETE: api/WorkSchedules/5
        [ResponseType(typeof(WorkSchedule))]
        public IHttpActionResult DeleteWorkSchedule(int id)
        {
            WorkSchedule workSchedule = db.WorkSchedules.Find(id);
            if (workSchedule == null)
            {
                return NotFound();
            }

            db.WorkSchedules.Remove(workSchedule);
            db.SaveChanges();

            return Ok(workSchedule);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WorkScheduleExists(int id)
        {
            return db.WorkSchedules.Count(e => e.WorkScheduleID == id) > 0;
        }
    }
}