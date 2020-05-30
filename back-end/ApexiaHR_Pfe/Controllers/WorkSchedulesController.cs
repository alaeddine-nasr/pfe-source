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
    public class WorkSchedulesController : ApiController
    {
        private ProjectDataBaseEntities db = new ProjectDataBaseEntities();

        // GET: api/WorkSchedules
        public IQueryable<WorkSchedule> GetWorkSchedule()
        {
            return db.WorkSchedule;
        }

        // GET: api/WorkSchedules/5
        [ResponseType(typeof(WorkSchedule))]
        public IHttpActionResult GetWorkSchedule(Guid id)
        {
            WorkSchedule workSchedule = db.WorkSchedule.Find(id);
            if (workSchedule == null)
            {
                return NotFound();
            }

            return Ok(workSchedule);
        }

        // PUT: api/WorkSchedules/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWorkSchedule(Guid id, WorkSchedule workSchedule)
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
            workSchedule.WorkScheduleID = new Guid();
            db.WorkSchedule.Add(workSchedule);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = workSchedule.WorkScheduleID }, workSchedule);
        }

        // DELETE: api/WorkSchedules/5
        [ResponseType(typeof(WorkSchedule))]
        public IHttpActionResult DeleteWorkSchedule(int id)
        {
            WorkSchedule workSchedule = db.WorkSchedule.Find(id);
            if (workSchedule == null)
            {
                return NotFound();
            }

            db.WorkSchedule.Remove(workSchedule);
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

        private bool WorkScheduleExists(Guid id)
        {
            return db.WorkSchedule.Count(e => e.WorkScheduleID == id) > 0;
        }
    }
}